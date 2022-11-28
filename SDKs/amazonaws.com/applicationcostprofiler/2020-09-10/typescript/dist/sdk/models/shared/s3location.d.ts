import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the Amazon Simple Storage Service (Amazon S3) location where AWS Application Cost Profiler reports are generated and then written to.
**/
export declare class S3Location extends SpeakeasyBase {
    bucket: string;
    prefix: string;
}
