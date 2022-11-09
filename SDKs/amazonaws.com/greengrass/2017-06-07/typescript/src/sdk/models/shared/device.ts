import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Device
/** 
 * Information about a device.
**/
export class Device extends SpeakeasyBase {
  @Metadata({ data: "json, name=CertificateArn" })
  certificateArn: string;

  @Metadata({ data: "json, name=Id" })
  id: string;

  @Metadata({ data: "json, name=SyncShadow" })
  syncShadow?: boolean;

  @Metadata({ data: "json, name=ThingArn" })
  thingArn: string;
}
