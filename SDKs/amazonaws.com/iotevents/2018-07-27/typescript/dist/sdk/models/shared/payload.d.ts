import { SpeakeasyBase } from "../../../internal/utils/utils";
import { PayloadTypeEnum } from "./payloadtypeenum";
/**
 * <p>Information needed to configure the payload.</p> <p>By default, AWS IoT Events generates a standard payload in JSON for any action. This action payload contains all attribute-value pairs that have the information about the detector model instance and the event triggered the action. To configure the action payload, you can use <code>contentExpression</code>.</p>
**/
export declare class Payload extends SpeakeasyBase {
    contentExpression: string;
    type: PayloadTypeEnum;
}
