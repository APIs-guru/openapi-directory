import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DisassociateClientDeviceFromCoreDeviceErrorEntry } from "./disassociateclientdevicefromcoredeviceerrorentry";



export class BatchDisassociateClientDeviceFromCoreDeviceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errorEntries", elemType: DisassociateClientDeviceFromCoreDeviceErrorEntry })
  errorEntries?: DisassociateClientDeviceFromCoreDeviceErrorEntry[];
}
