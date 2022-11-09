import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Core
/** 
 * Information about a core.
**/
export class Core extends SpeakeasyBase {
  @Metadata({ data: "json, name=CertificateArn" })
  certificateArn: string;

  @Metadata({ data: "json, name=Id" })
  id: string;

  @Metadata({ data: "json, name=SyncShadow" })
  syncShadow?: boolean;

  @Metadata({ data: "json, name=ThingArn" })
  thingArn: string;
}
