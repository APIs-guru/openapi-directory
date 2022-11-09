import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeLocationFsxWindowsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=Domain" })
  domain?: string;

  @Metadata({ data: "json, name=LocationArn" })
  locationArn?: string;

  @Metadata({ data: "json, name=LocationUri" })
  locationUri?: string;

  @Metadata({ data: "json, name=SecurityGroupArns" })
  securityGroupArns?: string[];

  @Metadata({ data: "json, name=User" })
  user?: string;
}
