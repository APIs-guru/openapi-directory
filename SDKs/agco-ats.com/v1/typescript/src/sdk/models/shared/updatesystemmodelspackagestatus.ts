import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateSystemModelsPackageStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClientID" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=ClientKey" })
  clientKey?: string;

  @SpeakeasyMetadata({ data: "json, name=DownloadTime" })
  downloadTime?: string;

  @SpeakeasyMetadata({ data: "json, name=Downloaded" })
  downloaded?: string;

  @SpeakeasyMetadata({ data: "json, name=InstallCompleted" })
  installCompleted?: string;

  @SpeakeasyMetadata({ data: "json, name=InstallResult" })
  installResult?: string;

  @SpeakeasyMetadata({ data: "json, name=InstallStarted" })
  installStarted?: string;

  @SpeakeasyMetadata({ data: "json, name=InstallTime" })
  installTime?: string;

  @SpeakeasyMetadata({ data: "json, name=Percentage" })
  percentage?: string;

  @SpeakeasyMetadata({ data: "json, name=Size" })
  size?: string;

  @SpeakeasyMetadata({ data: "json, name=Timestamp" })
  timestamp?: Date;
}
