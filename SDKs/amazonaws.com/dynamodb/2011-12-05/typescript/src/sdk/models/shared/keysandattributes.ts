import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Key } from "./key";


export class KeysAndAttributes extends SpeakeasyBase {
  @Metadata({ data: "json, name=AttributesToGet" })
  attributesToGet?: string[];

  @Metadata({ data: "json, name=ConsistentRead" })
  consistentRead?: boolean;

  @Metadata({ data: "json, name=Keys", elemType: shared.Key })
  keys: Key[];
}
