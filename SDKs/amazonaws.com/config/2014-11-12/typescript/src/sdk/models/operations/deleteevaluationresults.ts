import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DeleteEvaluationResultsXAmzTargetEnum {
    StarlingDoveServiceDeleteEvaluationResults = "StarlingDoveService.DeleteEvaluationResults"
}


export class DeleteEvaluationResultsHeaders extends SpeakeasyBase {
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
  xAmzTarget: DeleteEvaluationResultsXAmzTargetEnum;
}


export class DeleteEvaluationResultsRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeleteEvaluationResultsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DeleteEvaluationResultsRequest;
}


export class DeleteEvaluationResultsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deleteEvaluationResultsResponse?: Map<string, any>;

  @Metadata()
  noSuchConfigRuleException?: any;

  @Metadata()
  resourceInUseException?: any;

  @Metadata()
  statusCode: number;
}
