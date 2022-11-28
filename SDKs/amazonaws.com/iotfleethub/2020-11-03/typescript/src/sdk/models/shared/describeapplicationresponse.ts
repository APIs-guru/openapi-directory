import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApplicationStateEnum } from "./applicationstateenum";



export class DescribeApplicationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=applicationArn" })
  applicationArn: string;

  @SpeakeasyMetadata({ data: "json, name=applicationCreationDate" })
  applicationCreationDate: number;

  @SpeakeasyMetadata({ data: "json, name=applicationDescription" })
  applicationDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=applicationId" })
  applicationId: string;

  @SpeakeasyMetadata({ data: "json, name=applicationLastUpdateDate" })
  applicationLastUpdateDate: number;

  @SpeakeasyMetadata({ data: "json, name=applicationName" })
  applicationName: string;

  @SpeakeasyMetadata({ data: "json, name=applicationState" })
  applicationState: ApplicationStateEnum;

  @SpeakeasyMetadata({ data: "json, name=applicationUrl" })
  applicationUrl: string;

  @SpeakeasyMetadata({ data: "json, name=errorMessage" })
  errorMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=roleArn" })
  roleArn: string;

  @SpeakeasyMetadata({ data: "json, name=ssoClientId" })
  ssoClientId?: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: Map<string, string>;
}
