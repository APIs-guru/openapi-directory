import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SchemaColumn } from "./schemacolumn";
import { TransformStatusTypeEnum } from "./transformstatustypeenum";
import { TransformTypeEnum } from "./transformtypeenum";


// TransformFilterCriteria
/** 
 * The criteria used to filter the machine learning transforms.
**/
export class TransformFilterCriteria extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreatedAfter" })
  createdAfter?: Date;

  @Metadata({ data: "json, name=CreatedBefore" })
  createdBefore?: Date;

  @Metadata({ data: "json, name=GlueVersion" })
  glueVersion?: string;

  @Metadata({ data: "json, name=LastModifiedAfter" })
  lastModifiedAfter?: Date;

  @Metadata({ data: "json, name=LastModifiedBefore" })
  lastModifiedBefore?: Date;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Schema", elemType: shared.SchemaColumn })
  schema?: SchemaColumn[];

  @Metadata({ data: "json, name=Status" })
  status?: TransformStatusTypeEnum;

  @Metadata({ data: "json, name=TransformType" })
  transformType?: TransformTypeEnum;
}
