import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// FileSection
/** 
 * For files that are in a section, this field describes the section.
**/
export class FileSection extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;
}


export class File extends SpeakeasyBase {
  @Metadata({ data: "json, name=content" })
  content?: string;

  @Metadata({ data: "json, name=content_path" })
  contentPath?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=section" })
  section?: FileSection;

  @Metadata({ data: "json, name=size" })
  size?: number;
}
