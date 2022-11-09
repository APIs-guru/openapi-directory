import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListSecurityConfigurationsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Marker" })
  marker?: string;
}

export enum ListSecurityConfigurationsXAmzTargetEnum {
    ElasticMapReduceListSecurityConfigurations = "ElasticMapReduce.ListSecurityConfigurations"
}


export class ListSecurityConfigurationsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: ListSecurityConfigurationsXAmzTargetEnum;
}


export class ListSecurityConfigurationsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListSecurityConfigurationsQueryParams;

  @Metadata()
  headers: ListSecurityConfigurationsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ListSecurityConfigurationsInput;
}


export class ListSecurityConfigurationsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  invalidRequestException?: any;

  @Metadata()
  listSecurityConfigurationsOutput?: shared.ListSecurityConfigurationsOutput;

  @Metadata()
  statusCode: number;
}
