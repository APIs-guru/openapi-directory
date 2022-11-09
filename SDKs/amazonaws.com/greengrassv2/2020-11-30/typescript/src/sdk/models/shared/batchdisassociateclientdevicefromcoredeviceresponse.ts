import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DisassociateClientDeviceFromCoreDeviceErrorEntry } from "./disassociateclientdevicefromcoredeviceerrorentry";


export class BatchDisassociateClientDeviceFromCoreDeviceResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=errorEntries", elemType: shared.DisassociateClientDeviceFromCoreDeviceErrorEntry })
  errorEntries?: DisassociateClientDeviceFromCoreDeviceErrorEntry[];
}
