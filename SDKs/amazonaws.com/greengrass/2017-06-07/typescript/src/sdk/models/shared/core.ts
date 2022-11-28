import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Core
/** 
 * Information about a core.
**/
export class Core extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CertificateArn" })
  certificateArn: string;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=SyncShadow" })
  syncShadow?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ThingArn" })
  thingArn: string;
}
