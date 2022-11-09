import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeCrossAccountAccessRoleXAmzTargetEnum {
    InspectorServiceDescribeCrossAccountAccessRole = "InspectorService.DescribeCrossAccountAccessRole"
}


export class DescribeCrossAccountAccessRoleHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeCrossAccountAccessRoleXAmzTargetEnum;
}


export class DescribeCrossAccountAccessRoleRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeCrossAccountAccessRoleHeaders;
}


export class DescribeCrossAccountAccessRoleResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeCrossAccountAccessRoleResponse?: shared.DescribeCrossAccountAccessRoleResponse;

  @Metadata()
  internalException?: any;

  @Metadata()
  statusCode: number;
}
