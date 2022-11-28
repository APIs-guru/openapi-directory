import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains information about a component that is a candidate to deploy to a Greengrass core device.
**/
export declare class ComponentCandidate extends SpeakeasyBase {
    componentName?: string;
    componentVersion?: string;
    versionRequirements?: Map<string, string>;
}
