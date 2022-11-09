import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeRulesPackagesXAmzTargetEnum {
    InspectorServiceDescribeRulesPackages = "InspectorService.DescribeRulesPackages"
}


export class DescribeRulesPackagesHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeRulesPackagesXAmzTargetEnum;
}


export class DescribeRulesPackagesRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeRulesPackagesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeRulesPackagesRequest;
}


export class DescribeRulesPackagesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeRulesPackagesResponse?: shared.DescribeRulesPackagesResponse;

  @Metadata()
  internalException?: any;

  @Metadata()
  invalidInputException?: any;

  @Metadata()
  statusCode: number;
}
