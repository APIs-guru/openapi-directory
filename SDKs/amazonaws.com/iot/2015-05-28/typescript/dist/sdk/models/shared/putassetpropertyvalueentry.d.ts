import { SpeakeasyBase } from "../../../internal/utils";
import { AssetPropertyValue } from "./assetpropertyvalue";
/**
 * An asset property value entry containing the following information.
**/
export declare class PutAssetPropertyValueEntry extends SpeakeasyBase {
    assetId?: string;
    entryId?: string;
    propertyAlias?: string;
    propertyId?: string;
    propertyValues: AssetPropertyValue[];
}
