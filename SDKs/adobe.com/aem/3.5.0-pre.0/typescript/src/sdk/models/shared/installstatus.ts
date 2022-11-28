import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class InstallStatusStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=finished" })
  finished?: boolean;

  @SpeakeasyMetadata({ data: "json, name=itemCount" })
  itemCount?: number;
}


export class InstallStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: InstallStatusStatus;
}
