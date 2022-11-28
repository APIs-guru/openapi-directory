import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AssociateClientDeviceWithCoreDeviceErrorEntry } from "./associateclientdevicewithcoredeviceerrorentry";



export class BatchAssociateClientDeviceWithCoreDeviceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errorEntries", elemType: AssociateClientDeviceWithCoreDeviceErrorEntry })
  errorEntries?: AssociateClientDeviceWithCoreDeviceErrorEntry[];
}
