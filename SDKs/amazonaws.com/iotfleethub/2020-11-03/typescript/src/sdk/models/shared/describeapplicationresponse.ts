import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ApplicationStateEnum } from "./applicationstateenum";


export class DescribeApplicationResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=applicationArn" })
  applicationArn: string;

  @Metadata({ data: "json, name=applicationCreationDate" })
  applicationCreationDate: number;

  @Metadata({ data: "json, name=applicationDescription" })
  applicationDescription?: string;

  @Metadata({ data: "json, name=applicationId" })
  applicationId: string;

  @Metadata({ data: "json, name=applicationLastUpdateDate" })
  applicationLastUpdateDate: number;

  @Metadata({ data: "json, name=applicationName" })
  applicationName: string;

  @Metadata({ data: "json, name=applicationState" })
  applicationState: ApplicationStateEnum;

  @Metadata({ data: "json, name=applicationUrl" })
  applicationUrl: string;

  @Metadata({ data: "json, name=errorMessage" })
  errorMessage?: string;

  @Metadata({ data: "json, name=roleArn" })
  roleArn: string;

  @Metadata({ data: "json, name=ssoClientId" })
  ssoClientId?: string;

  @Metadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}
