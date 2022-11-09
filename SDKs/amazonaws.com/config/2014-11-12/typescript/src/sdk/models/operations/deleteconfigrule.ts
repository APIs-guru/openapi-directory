import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DeleteConfigRuleXAmzTargetEnum {
    StarlingDoveServiceDeleteConfigRule = "StarlingDoveService.DeleteConfigRule"
}


export class DeleteConfigRuleHeaders extends SpeakeasyBase {
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
  xAmzTarget: DeleteConfigRuleXAmzTargetEnum;
}


export class DeleteConfigRuleRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeleteConfigRuleHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DeleteConfigRuleRequest;
}


export class DeleteConfigRuleResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  noSuchConfigRuleException?: any;

  @Metadata()
  resourceInUseException?: any;

  @Metadata()
  statusCode: number;
}
