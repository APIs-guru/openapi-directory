import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ConformancePackInputParameter } from "./conformancepackinputparameter";


// ConformancePackDetail
/** 
 * Returns details of a conformance pack. A conformance pack is a collection of Config rules and remediation actions that can be easily deployed in an account and a region.
**/
export class ConformancePackDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConformancePackArn" })
  conformancePackArn: string;

  @Metadata({ data: "json, name=ConformancePackId" })
  conformancePackId: string;

  @Metadata({ data: "json, name=ConformancePackInputParameters", elemType: shared.ConformancePackInputParameter })
  conformancePackInputParameters?: ConformancePackInputParameter[];

  @Metadata({ data: "json, name=ConformancePackName" })
  conformancePackName: string;

  @Metadata({ data: "json, name=CreatedBy" })
  createdBy?: string;

  @Metadata({ data: "json, name=DeliveryS3Bucket" })
  deliveryS3Bucket?: string;

  @Metadata({ data: "json, name=DeliveryS3KeyPrefix" })
  deliveryS3KeyPrefix?: string;

  @Metadata({ data: "json, name=LastUpdateRequestedTime" })
  lastUpdateRequestedTime?: Date;
}
