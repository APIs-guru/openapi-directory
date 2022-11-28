import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InstalledComponent } from "./installedcomponent";



export class ListInstalledComponentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=installedComponents", elemType: InstalledComponent })
  installedComponents?: InstalledComponent[];

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
