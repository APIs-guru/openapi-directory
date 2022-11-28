import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeLocationFsxWindowsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Domain" })
  domain?: string;

  @SpeakeasyMetadata({ data: "json, name=LocationArn" })
  locationArn?: string;

  @SpeakeasyMetadata({ data: "json, name=LocationUri" })
  locationUri?: string;

  @SpeakeasyMetadata({ data: "json, name=SecurityGroupArns" })
  securityGroupArns?: string[];

  @SpeakeasyMetadata({ data: "json, name=User" })
  user?: string;
}
