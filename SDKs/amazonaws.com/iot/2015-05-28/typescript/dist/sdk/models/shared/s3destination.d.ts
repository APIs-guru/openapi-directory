import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes the location of updated firmware in S3.
**/
export declare class S3Destination extends SpeakeasyBase {
    bucket?: string;
    prefix?: string;
}
