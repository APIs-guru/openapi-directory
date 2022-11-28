import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// XmlClassifier
/** 
 * A classifier for <code>XML</code> content.
**/
export class XmlClassifier extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Classification" })
  classification: string;

  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=LastUpdated" })
  lastUpdated?: Date;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=RowTag" })
  rowTag?: string;

  @SpeakeasyMetadata({ data: "json, name=Version" })
  version?: number;
}
