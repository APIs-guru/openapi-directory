import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetAggregateResourceConfigXAmzTargetEnum {
    StarlingDoveServiceGetAggregateResourceConfig = "StarlingDoveService.GetAggregateResourceConfig"
}


export class GetAggregateResourceConfigHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetAggregateResourceConfigXAmzTargetEnum;
}


export class GetAggregateResourceConfigRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetAggregateResourceConfigHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetAggregateResourceConfigRequest;
}


export class GetAggregateResourceConfigResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getAggregateResourceConfigResponse?: shared.GetAggregateResourceConfigResponse;

  @Metadata()
  noSuchConfigurationAggregatorException?: any;

  @Metadata()
  oversizedConfigurationItemException?: any;

  @Metadata()
  resourceNotDiscoveredException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationException?: any;
}
