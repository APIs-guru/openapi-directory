import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeProblemXAmzTargetEnum {
    Ec2WindowsBarleyServiceDescribeProblem = "EC2WindowsBarleyService.DescribeProblem"
}


export class DescribeProblemHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeProblemXAmzTargetEnum;
}


export class DescribeProblemRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeProblemHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeProblemRequest;
}


export class DescribeProblemResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeProblemResponse?: shared.DescribeProblemResponse;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  validationException?: any;
}
