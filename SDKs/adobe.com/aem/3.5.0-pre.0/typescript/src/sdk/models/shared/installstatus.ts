import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class InstallStatusStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=finished" })
  finished?: boolean;

  @Metadata({ data: "json, name=itemCount" })
  itemCount?: number;
}


export class InstallStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=status" })
  status?: InstallStatusStatus;
}
