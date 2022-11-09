import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { InstalledComponent } from "./installedcomponent";


export class ListInstalledComponentsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=installedComponents", elemType: shared.InstalledComponent })
  installedComponents?: InstalledComponent[];

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;
}
