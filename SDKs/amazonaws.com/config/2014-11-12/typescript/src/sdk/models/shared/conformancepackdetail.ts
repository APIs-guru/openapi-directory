import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConformancePackInputParameter } from "./conformancepackinputparameter";



// ConformancePackDetail
/** 
 * Returns details of a conformance pack. A conformance pack is a collection of Config rules and remediation actions that can be easily deployed in an account and a region.
**/
export class ConformancePackDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConformancePackArn" })
  conformancePackArn: string;

  @SpeakeasyMetadata({ data: "json, name=ConformancePackId" })
  conformancePackId: string;

  @SpeakeasyMetadata({ data: "json, name=ConformancePackInputParameters", elemType: ConformancePackInputParameter })
  conformancePackInputParameters?: ConformancePackInputParameter[];

  @SpeakeasyMetadata({ data: "json, name=ConformancePackName" })
  conformancePackName: string;

  @SpeakeasyMetadata({ data: "json, name=CreatedBy" })
  createdBy?: string;

  @SpeakeasyMetadata({ data: "json, name=DeliveryS3Bucket" })
  deliveryS3Bucket?: string;

  @SpeakeasyMetadata({ data: "json, name=DeliveryS3KeyPrefix" })
  deliveryS3KeyPrefix?: string;

  @SpeakeasyMetadata({ data: "json, name=LastUpdateRequestedTime" })
  lastUpdateRequestedTime?: Date;
}
