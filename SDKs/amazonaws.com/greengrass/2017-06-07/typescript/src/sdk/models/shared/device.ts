import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Device
/** 
 * Information about a device.
**/
export class Device extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CertificateArn" })
  certificateArn: string;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=SyncShadow" })
  syncShadow?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ThingArn" })
  thingArn: string;
}
