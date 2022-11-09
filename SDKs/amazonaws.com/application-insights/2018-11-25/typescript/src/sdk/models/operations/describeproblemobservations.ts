import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeProblemObservationsXAmzTargetEnum {
    Ec2WindowsBarleyServiceDescribeProblemObservations = "EC2WindowsBarleyService.DescribeProblemObservations"
}


export class DescribeProblemObservationsHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeProblemObservationsXAmzTargetEnum;
}


export class DescribeProblemObservationsRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeProblemObservationsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeProblemObservationsRequest;
}


export class DescribeProblemObservationsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeProblemObservationsResponse?: shared.DescribeProblemObservationsResponse;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationException?: any;
}
