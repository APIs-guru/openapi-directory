import { SpeakeasyBase } from "../../../internal/utils/utils";
import { InstalledComponent } from "./installedcomponent";
export declare class ListInstalledComponentsResponse extends SpeakeasyBase {
    installedComponents?: InstalledComponent[];
    nextToken?: string;
}
