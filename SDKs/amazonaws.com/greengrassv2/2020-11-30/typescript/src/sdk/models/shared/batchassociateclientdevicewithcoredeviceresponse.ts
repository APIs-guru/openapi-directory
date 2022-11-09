import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AssociateClientDeviceWithCoreDeviceErrorEntry } from "./associateclientdevicewithcoredeviceerrorentry";


export class BatchAssociateClientDeviceWithCoreDeviceResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=errorEntries", elemType: shared.AssociateClientDeviceWithCoreDeviceErrorEntry })
  errorEntries?: AssociateClientDeviceWithCoreDeviceErrorEntry[];
}
