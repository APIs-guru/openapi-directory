import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CsvClassifier } from "./csvclassifier";
import { GrokClassifier } from "./grokclassifier";
import { JsonClassifier } from "./jsonclassifier";
import { XmlClassifier } from "./xmlclassifier";


// Classifier
/** 
 * <p>Classifiers are triggered during a crawl task. A classifier checks whether a given file is in a format it can handle. If it is, the classifier creates a schema in the form of a <code>StructType</code> object that matches that data format.</p> <p>You can use the standard classifiers that Glue provides, or you can write your own classifiers to best categorize your data sources and specify the appropriate schemas to use for them. A classifier can be a <code>grok</code> classifier, an <code>XML</code> classifier, a <code>JSON</code> classifier, or a custom <code>CSV</code> classifier, as specified in one of the fields in the <code>Classifier</code> object.</p>
**/
export class Classifier extends SpeakeasyBase {
  @Metadata({ data: "json, name=CsvClassifier" })
  csvClassifier?: CsvClassifier;

  @Metadata({ data: "json, name=GrokClassifier" })
  grokClassifier?: GrokClassifier;

  @Metadata({ data: "json, name=JsonClassifier" })
  jsonClassifier?: JsonClassifier;

  @Metadata({ data: "json, name=XMLClassifier" })
  xmlClassifier?: XmlClassifier;
}
