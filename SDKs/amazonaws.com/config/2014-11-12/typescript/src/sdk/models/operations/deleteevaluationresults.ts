import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum DeleteEvaluationResultsXAmzTargetEnum {
    StarlingDoveServiceDeleteEvaluationResults = "StarlingDoveService.DeleteEvaluationResults"
}


export class DeleteEvaluationResultsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: DeleteEvaluationResultsXAmzTargetEnum;
}


export class DeleteEvaluationResultsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: DeleteEvaluationResultsHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.DeleteEvaluationResultsRequest;
}


export class DeleteEvaluationResultsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  deleteEvaluationResultsResponse?: Map<string, any>;

  @SpeakeasyMetadata()
  noSuchConfigRuleException?: any;

  @SpeakeasyMetadata()
  resourceInUseException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
