import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DisableRuleXAmzTargetEnum {
    AwsEventsDisableRule = "AWSEvents.DisableRule"
}


export class DisableRuleHeaders extends SpeakeasyBase {
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
  xAmzTarget: DisableRuleXAmzTargetEnum;
}


export class DisableRuleRequest extends SpeakeasyBase {
  @Metadata()
  headers: DisableRuleHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DisableRuleRequest;
}


export class DisableRuleResponse extends SpeakeasyBase {
  @Metadata()
  concurrentModificationException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalException?: any;

  @Metadata()
  managedRuleException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
