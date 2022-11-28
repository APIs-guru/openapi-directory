import { SpeakeasyBase } from "../../../internal/utils";
import { EbsOptimizedInfo } from "./ebsoptimizedinfo";
import { EbsOptimizedSupportEnum } from "./ebsoptimizedsupportenum";
import { EbsEncryptionSupportEnum } from "./ebsencryptionsupportenum";
import { EbsNvmeSupportEnum } from "./ebsnvmesupportenum";
/**
 * Describes the Amazon EBS features supported by the instance type.
**/
export declare class EbsInfo extends SpeakeasyBase {
    ebsOptimizedInfo?: EbsOptimizedInfo;
    ebsOptimizedSupport?: EbsOptimizedSupportEnum;
    encryptionSupport?: EbsEncryptionSupportEnum;
    nvmeSupport?: EbsNvmeSupportEnum;
}
