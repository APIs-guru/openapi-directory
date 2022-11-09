import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// XmlClassifier
/** 
 * A classifier for <code>XML</code> content.
**/
export class XmlClassifier extends SpeakeasyBase {
  @Metadata({ data: "json, name=Classification" })
  classification: string;

  @Metadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=LastUpdated" })
  lastUpdated?: Date;

  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=RowTag" })
  rowTag?: string;

  @Metadata({ data: "json, name=Version" })
  version?: number;
}
