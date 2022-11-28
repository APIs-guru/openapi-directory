import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An activity that computes an arithmetic expression using the message's attributes.
**/
export declare class MathActivity extends SpeakeasyBase {
    attribute: string;
    math: string;
    name: string;
    next?: string;
}
