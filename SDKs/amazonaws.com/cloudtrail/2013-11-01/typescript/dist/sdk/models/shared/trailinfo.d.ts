import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about a CloudTrail trail, including the trail's name, home region, and Amazon Resource Name (ARN).
**/
export declare class TrailInfo extends SpeakeasyBase {
    homeRegion?: string;
    name?: string;
    trailArn?: string;
}
