import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AssetPropertyValue } from "./assetpropertyvalue";



// PutAssetPropertyValueEntry
/** 
 * An asset property value entry containing the following information.
**/
export class PutAssetPropertyValueEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assetId" })
  assetId?: string;

  @SpeakeasyMetadata({ data: "json, name=entryId" })
  entryId?: string;

  @SpeakeasyMetadata({ data: "json, name=propertyAlias" })
  propertyAlias?: string;

  @SpeakeasyMetadata({ data: "json, name=propertyId" })
  propertyId?: string;

  @SpeakeasyMetadata({ data: "json, name=propertyValues", elemType: AssetPropertyValue })
  propertyValues: AssetPropertyValue[];
}
