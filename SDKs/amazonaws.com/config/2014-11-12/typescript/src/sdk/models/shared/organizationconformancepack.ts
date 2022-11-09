import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ConformancePackInputParameter } from "./conformancepackinputparameter";


// OrganizationConformancePack
/** 
 * An organization conformance pack that has information about conformance packs that Config creates in member accounts. 
**/
export class OrganizationConformancePack extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConformancePackInputParameters", elemType: shared.ConformancePackInputParameter })
  conformancePackInputParameters?: ConformancePackInputParameter[];

  @Metadata({ data: "json, name=DeliveryS3Bucket" })
  deliveryS3Bucket?: string;

  @Metadata({ data: "json, name=DeliveryS3KeyPrefix" })
  deliveryS3KeyPrefix?: string;

  @Metadata({ data: "json, name=ExcludedAccounts" })
  excludedAccounts?: string[];

  @Metadata({ data: "json, name=LastUpdateTime" })
  lastUpdateTime: Date;

  @Metadata({ data: "json, name=OrganizationConformancePackArn" })
  organizationConformancePackArn: string;

  @Metadata({ data: "json, name=OrganizationConformancePackName" })
  organizationConformancePackName: string;
}
