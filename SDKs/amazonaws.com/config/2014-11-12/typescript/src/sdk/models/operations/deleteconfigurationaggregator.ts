import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DeleteConfigurationAggregatorXAmzTargetEnum {
    StarlingDoveServiceDeleteConfigurationAggregator = "StarlingDoveService.DeleteConfigurationAggregator"
}


export class DeleteConfigurationAggregatorHeaders extends SpeakeasyBase {
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
  xAmzTarget: DeleteConfigurationAggregatorXAmzTargetEnum;
}


export class DeleteConfigurationAggregatorRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeleteConfigurationAggregatorHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DeleteConfigurationAggregatorRequest;
}


export class DeleteConfigurationAggregatorResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  noSuchConfigurationAggregatorException?: any;

  @Metadata()
  statusCode: number;
}
