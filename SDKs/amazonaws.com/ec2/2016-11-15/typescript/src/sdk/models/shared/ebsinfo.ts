import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EbsOptimizedInfo } from "./ebsoptimizedinfo";
import { EbsOptimizedSupportEnum } from "./ebsoptimizedsupportenum";
import { EbsEncryptionSupportEnum } from "./ebsencryptionsupportenum";
import { EbsNvmeSupportEnum } from "./ebsnvmesupportenum";



// EbsInfo
/** 
 * Describes the Amazon EBS features supported by the instance type.
**/
export class EbsInfo extends SpeakeasyBase {
  @SpeakeasyMetadata()
  ebsOptimizedInfo?: EbsOptimizedInfo;

  @SpeakeasyMetadata()
  ebsOptimizedSupport?: EbsOptimizedSupportEnum;

  @SpeakeasyMetadata()
  encryptionSupport?: EbsEncryptionSupportEnum;

  @SpeakeasyMetadata()
  nvmeSupport?: EbsNvmeSupportEnum;
}
