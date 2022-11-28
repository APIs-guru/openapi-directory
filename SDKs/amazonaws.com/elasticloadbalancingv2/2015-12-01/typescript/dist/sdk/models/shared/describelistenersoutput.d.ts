import { SpeakeasyBase } from "../../../internal/utils";
import { Listener } from "./listener";
export declare class DescribeListenersOutput extends SpeakeasyBase {
    listeners?: Listener[];
    nextMarker?: string;
}
