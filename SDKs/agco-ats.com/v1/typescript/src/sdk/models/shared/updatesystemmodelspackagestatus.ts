import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateSystemModelsPackageStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClientID" })
  clientId?: string;

  @Metadata({ data: "json, name=ClientKey" })
  clientKey?: string;

  @Metadata({ data: "json, name=DownloadTime" })
  downloadTime?: string;

  @Metadata({ data: "json, name=Downloaded" })
  downloaded?: string;

  @Metadata({ data: "json, name=InstallCompleted" })
  installCompleted?: string;

  @Metadata({ data: "json, name=InstallResult" })
  installResult?: string;

  @Metadata({ data: "json, name=InstallStarted" })
  installStarted?: string;

  @Metadata({ data: "json, name=InstallTime" })
  installTime?: string;

  @Metadata({ data: "json, name=Percentage" })
  percentage?: string;

  @Metadata({ data: "json, name=Size" })
  size?: string;

  @Metadata({ data: "json, name=Timestamp" })
  timestamp?: Date;
}
