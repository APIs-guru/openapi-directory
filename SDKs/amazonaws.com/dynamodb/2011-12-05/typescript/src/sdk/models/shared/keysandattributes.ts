import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Key } from "./key";



export class KeysAndAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AttributesToGet" })
  attributesToGet?: string[];

  @SpeakeasyMetadata({ data: "json, name=ConsistentRead" })
  consistentRead?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Keys", elemType: Key })
  keys: Key[];
}
