import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AssetPropertyValue } from "./assetpropertyvalue";


// PutAssetPropertyValueEntry
/** 
 * An asset property value entry containing the following information.
**/
export class PutAssetPropertyValueEntry extends SpeakeasyBase {
  @Metadata({ data: "json, name=assetId" })
  assetId?: string;

  @Metadata({ data: "json, name=entryId" })
  entryId?: string;

  @Metadata({ data: "json, name=propertyAlias" })
  propertyAlias?: string;

  @Metadata({ data: "json, name=propertyId" })
  propertyId?: string;

  @Metadata({ data: "json, name=propertyValues", elemType: shared.AssetPropertyValue })
  propertyValues: AssetPropertyValue[];
}
