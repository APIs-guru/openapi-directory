import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConformancePackInputParameter } from "./conformancepackinputparameter";



// OrganizationConformancePack
/** 
 * An organization conformance pack that has information about conformance packs that Config creates in member accounts. 
**/
export class OrganizationConformancePack extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConformancePackInputParameters", elemType: ConformancePackInputParameter })
  conformancePackInputParameters?: ConformancePackInputParameter[];

  @SpeakeasyMetadata({ data: "json, name=DeliveryS3Bucket" })
  deliveryS3Bucket?: string;

  @SpeakeasyMetadata({ data: "json, name=DeliveryS3KeyPrefix" })
  deliveryS3KeyPrefix?: string;

  @SpeakeasyMetadata({ data: "json, name=ExcludedAccounts" })
  excludedAccounts?: string[];

  @SpeakeasyMetadata({ data: "json, name=LastUpdateTime" })
  lastUpdateTime: Date;

  @SpeakeasyMetadata({ data: "json, name=OrganizationConformancePackArn" })
  organizationConformancePackArn: string;

  @SpeakeasyMetadata({ data: "json, name=OrganizationConformancePackName" })
  organizationConformancePackName: string;
}
